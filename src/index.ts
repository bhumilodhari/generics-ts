// const nums : number[] = [];
const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}
// function identity(item: any): any {
//   return item;
// }

// Generic function identity
interface Cat {
  name: string;
  breed: string;
}
function identity<Type>(item: Type): Type {
  return item;
}

// identity<number>(7);
// identity<string>("Hi");
// identity<Cat>({});

function getrandomElement<T>(list: T[]) {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getrandomElement<string>(["a", "b", "c"]));
getrandomElement<number>([1, 2, 3]);

getrandomElement(["a", "b", "c"]);

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ name: "bhumi" }, { pets: ["blue", "hgdhg"] });

console.log(merge({ name: "bhumi" }, { num: 22 }));

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

printDoubleLength("bhumiiii");
// printDoubleLength(222);

function makeEmptyArray<T = number>(): T[] {
  return [];
}

const numbers = makeEmptyArray();
const bools = makeEmptyArray<boolean>();

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

// class VideoPlaylist {
//   public videos: Video[] = [];
// }

// class SongPlaylist {
//   public songs: Video[] = [];
// }

class PlayList<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new PlayList<Song>();

const videos = new PlayList<Video>();
// videos.add();
