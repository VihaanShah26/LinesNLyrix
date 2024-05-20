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

def search_songs(song_name): 
  song_name = song_name.strip()
  ans = f"'{song_name}' not found in database"
  sql = "SELECT * FROM songs WHERE song_name LIKE %s"
  results = datatier.retrieve_one_row(dbConn, sql, [f"%{song_name}%"])

  if len(results) > 0:
    st.dataframe(results)
  else: 
    st.write(ans)
  return ans


st.title("Lookup Songs in Lines N' Lyrix Database")

song_name = st.text_input("Enter the song name you want to search for")

if st.button("Search"):
  results = search_songs(song_name)

