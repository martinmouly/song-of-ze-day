import json
import random
import os

# Read the JSON file containing Spotify songs
with open('all_tracks.json', 'r') as file:
    all_tracks = json.load(file)

# Select a random song from the list
random_song = random.choice(all_tracks)

# Extract song details
title = random_song['title']
artist = random_song['artist']
url = random_song['url']

result = {
    "title": title,
    "artist": artist,
    "url": url
}

# Write song details to a JSON file
with open('selected_track.json', 'w') as output_file:
    json.dump(result, output_file, indent=4)

print("Song details written to selected_track.json")

# Set environment variable to indicate that a song has been selected
os.environ["SELECTED"] = title + " - " + artist + 
