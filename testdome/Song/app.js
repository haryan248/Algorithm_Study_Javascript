class Song {
    name;
    nextSong;

    constructor(name) {
        this.name = name;
    }
    nextSong(nextSong) {
        this.nextSong = nextSong;
    }
    /**
     * @return {boolean} true if the playlist is repeating, false if not.
     */
    isRepeatingPlaylist() {
        // Your code goes here
        let slow = this.nextSong;
        let fast = slow == null ? null : slow.nextSong;
        while (fast != null) {
            if (slow == this || slow == fast) return true;
            slow = slow.nextSong;
            fast = fast.nextSong;
            if (fast != null) fast = fast.nextSong;
        }
        return false;
    }
}

let first = new Song("Hello");
let second = new Song("Eye of the tiger");

first.nextSong = second;
second.nextSong = first;

console.log(first.isRepeatingPlaylist());
