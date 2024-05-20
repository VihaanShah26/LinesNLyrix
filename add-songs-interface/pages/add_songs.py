import awsutil
import datatier
import streamlit as st
import pandas as pd

endpoint = "linesnlyrix.ct4ue2aaohre.us-east-2.rds.amazonaws.com"
portnum = 3306
username ="admin"
pwd = "Lineslyrix!beyond"
dbname = "linesnlyrixdb"

dbConn = datatier.get_dbConn(endpoint, portnum, username, pwd, dbname)

if dbConn is None:
  print('**ERROR: unable to connect to database, exiting')


def add_songs(Artist, decade, genre, lyrix, song_name, year, potpourri, Link):
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
    
    # Insert data into SQL table
    sql = "INSERT INTO songs (artist, decade, genre, lyrix, song_name, song_year, songs_potpourri, youtube_link) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
    add = datatier.perform_action(dbConn, sql, [Artist, decade, genre, lyrix, song_name, year, potpourri, Link])

    return add


# create stremlit interface to allow user to add songs 
st.title("Add Songs to Lines N' Lyrix Database")
st.write("Please enter the song details below")
Artist = st.text_input("Artist")
decade = st.text_input("Decade")
genre = st.text_input("Genre")
# lyrix should be multiline text input
lyrix = st.text_area("Lyrix")
song_name = st.text_input("Song Name")
year = st.text_input("Year")
potpourri = st.text_input("Potpourri")
Link = st.text_input("Youtube Link")

if st.button("Add Song"):
    add = add_songs(Artist, decade, genre, lyrix, song_name, year, potpourri, Link)
    if add == -1: 
        st.write("Error while adding song")
    elif add == 0:
        st.write("Song was not added")
    else:
        st.write("Song added successfully")
    st.write("Please refresh the page to add another song")