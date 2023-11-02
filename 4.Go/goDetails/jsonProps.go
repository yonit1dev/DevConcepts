package godetails

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"strings"
	"time"
)

type Movie struct {
	Title  string   `json:"title"`
	Year   int      `json:"released"`
	Color  bool     `json:"color,omitempty"`
	Actors []string `json:"characters"`
}

func JSONProps() {
	var movies = []Movie{
		{
			Title: "Batman Begins", Year: 2005, Color: true, Actors: []string{
				"Christian Bale", "Heath Ledger",
			},
		},
		{
			Title: "The Dark Knight", Year: 2008, Color: true, Actors: []string{
				"Christian Bale", "Heath Ledger",
			},
		},
		{
			Title: "The Dark Knight Returns", Year: 2012, Color: true, Actors: []string{
				"Christian Bale", "Heath Ledger",
			},
		},
	}

	data, err := json.MarshalIndent(movies, "", "	") // returns a byte slice with no extra whitespaces
	if err != nil {
		log.Fatalf("JSON marshaling failed: %s", err)
	}

	fmt.Printf("%s\n", data)
}

// Github Issue Search
const IssueURL = "https://api.github.com/search/issues"

type IssuesSearchResult struct {
	TotalCount int `json:"total_count"`
	Items      []*Issue
}

type Issue struct {
	Number    int
	HTMLURL   string `json:"html_url"`
	Title     string
	State     string
	User      *User
	CreatedAt time.Time `json:"created_at"`
	Body      string
}

type User struct {
	Login   string
	HTMLURL string `json:"html_url"`
}

func SearchIssues(terms []string) (*IssuesSearchResult, error) {
	q := url.QueryEscape(strings.Join(terms, " "))
	resp, err := http.Get(IssueURL + "?q=" + q)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("search query failed: %s", resp.Status)
	}

	var result IssuesSearchResult
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return nil, err
	}

	return &result, nil
}

func RunSearch() {
	search, err := SearchIssues([]string{"repo:golang/go is:open json decoder"})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("%d issues:\n", search.TotalCount)
	for _, item := range search.Items {
		fmt.Printf("#%-5d %9.9s %.55s\n",
			item.Number, item.User.Login, item.Title)
	}
}
