import sqlite3
from collections import Counter
from os import listdir, remove
try: import simplejson as json
except ImportError: import json

#Set the name of the folder the text files are in
directory = "Book Folder/"

#Words that we are searching for
wordSearch = ["death","beauty","truth","war","friends"]

#Name of the database
databaseName = "IlliadWords.db"

#If a database already exists....
if databaseName in listdir():
	#Delete it as we are maing a new one
	remove(databaseName)

#This makes a new database in sqlite
conn = sqlite3.connect(databaseName)
#I think this lets us start writing
c = conn.cursor()
#Creates a table in the database
#Set the column names. Text is text and real is numbers
c.execute('''CREATE TABLE wordCounts
             (title text, death real, beauty real, truth real, war real, friends real)''')

#For each file in the directory....
for fileName in listdir(directory):
	#If it doesn't start with a "." (to not get the hidden files)
	if not fileName.startswith('.'):
		#Open the file with utf-8 encoding
		bookFile = open(directory+fileName, "r", encoding='utf-8')
		#file.read().lower() gets the whole file in lowercase
		#.replace('-', ' ') replaces "-" with " " becuase otherwise words with
		# a dash between them are considered a single word
		#.split() makes it into an array of these words split by spaces
		#Counter turns this into a dictionary with a count for each word based
		# on how often it occurs
		wordcount = Counter(bookFile.read().lower().replace('-', ' ').split())
		#Start an array containing only the file (book) name
		wordArray = [fileName]
		#For each word we are searching for....
		for word in wordSearch:
			#Append the count of that word from the wordcount dictionary
			wordArray.append(wordcount[word])
		#Take the array of a name and 5 counts and add it as a new row in the table
		c.execute('INSERT INTO wordCounts VALUES (?,?,?,?,?,?)', wordArray)
		#Commit the change
		conn.commit()
		#Close the file
		bookFile.close()

#This just prints out the database
for row in c.execute('SELECT * FROM wordCounts ORDER BY title'):
    print(row)

#Close the database connection
conn.close()
