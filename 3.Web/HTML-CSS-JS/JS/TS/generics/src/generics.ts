const input = document.querySelector<HTMLInputElement>("#username")!;
console.log(input.value);

input.value = "From TS";
console.log(input.value);

function booleanIdentity(item: boolean): boolean {
  return item;
}

function myIdentity<T>(item: T): T {
  return item;
}

myIdentity<number>(7);

function getRandomElement<T>(array: T[]): T {
  const index = Math.floor(Math.random() * array.length);

  return array[index];
}

const myArray = [4, 5, 6];
console.log(getRandomElement(myArray));

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const newObj = merge({ name: "Object" }, { length: 30 });
console.log(newObj);

function makeEmptyList<T = number>(): T[] {
  return [];
}

const arrays = makeEmptyList<string>();
arrays.push("hello");

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();
