import datatier
import streamlit as st
import pandas as pd
import csv

endpoint = "linesnlyrix.ct4ue2aaohre.us-east-2.rds.amazonaws.com"
portnum = 3306
username ="admin"
pwd = "Lineslyrix!beyond"
dbname = "linesnlyrixdb"

dbConn = datatier.get_dbConn(endpoint, portnum, username, pwd, dbname)

if dbConn is None:
  print('**ERROR: unable to connect to database, exiting')


def add_songs(Artist, decade, genre, lyrix, song_name, year, potpourri, Link, album, cover):
    if pd.isna(Artist): 
        Artist = None
    if pd.isna(decade): 
        decade = None
    if pd.isna(genre): 
        genre = None
    if pd.isna(lyrix): 
        lyrix = None
    if pd.isna(song_name): 
        song_name = None
    if pd.isna(year): 
        year = None
    if pd.isna(potpourri): 
        potpourri = None
    if pd.isna(Link): 
        Link = None
    if pd.isna(album):
        album = None
    if pd.isna(cover):
        cover = None
    
    # Insert data into SQL table
    sql = "INSERT INTO songs (artist, decade, genre, lyrix, song_name, song_year, songs_potpourri, youtube_link, album, cover) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    add = datatier.perform_action(dbConn, sql, [Artist, decade, genre, lyrix, song_name, year, potpourri, Link, album, cover])

file = open('beatles.csv', 'r')

reader = csv.reader(file)

for row in reader: 
    lyrix = row[1]
    name_and_artist = row[2]
    name_and_artist = name_and_artist.split('/')
    if len(name_and_artist) == 2:
        artist = name_and_artist[1]
        artist = artist.strip()
        song_name = name_and_artist[0]
        song_name = song_name.strip()
    else:
        artist = None
        song_name = name_and_artist[0]
        song_name = song_name.strip()
    link = row[5]
    year = row[6]
    Artist = 'Beatles'
    album = row[3]
    cover = row[4]

    add_songs(Artist, None, None, lyrix, song_name, year, None, link, album, cover)
    

file.close()