package basicfunctionality

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
	"sync"
)

// Reads the contents of the web page and writes them to example.html
func WebFn() {
	for _, url := range os.Args[1:] {
		if resp, err := http.Get(url); err != nil {
			fmt.Printf("Fetch Error %v\n", err)
			os.Exit(1)
		} else {
			_, err = io.Copy(os.Stdout, resp.Body)

			if err != nil {
				fmt.Printf("Body Read Error %v\n", err)
				os.Exit(1)
			}
		}
	}
}

// Initialize a web server
func WebFnServer() {

	http.HandleFunc("/", handleRoot)
	http.HandleFunc("/hello/", handleHello)

	log.Fatal(http.ListenAndServe("localhost:8000", nil))

}

func handleRoot(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "URL.Path: %q\n", r.URL.Path)
}

func handleHello(w http.ResponseWriter, r *http.Request) {
	name := strings.TrimPrefix(r.URL.Path, "/hello/")
	fmt.Fprintf(w, "Hello User: %s\n", strings.ToLower(name))
}

// Count the number of requests
var mu sync.Mutex
var count int

func CountRequest() {
	http.HandleFunc("/", handleRootCount)
	http.HandleFunc("/count", counter)

	log.Fatal(http.ListenAndServe("localhost:8000", nil))
}

func handleRootCount(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	count++
	mu.Unlock()
	fmt.Fprintf(w, "URL.Path = %q\n", r.URL.Path)
}

func counter(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	fmt.Fprintf(w, "Count: %d\n", count)
	mu.Unlock()
}
