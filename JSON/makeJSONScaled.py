import json
from collections import Counter
from os import listdir, remove
import numpy as np


#Set the name of the folder the text files are in
directory = "Book Folder/"

#Words that we are searching for
wordSearch = ["fight","honor","dead","pride","greed","lead","friend","love","justice","trick","smart","plot","sad","husband",
			  "steady","courage","skill","dedication","grace","charm","coward","devoted","fate","future","tired","old","king",
			  "beauty","wife","white"]

#Name of the database
jsonName = "ScaledIlliadWords.json"

#If a database already exists....
if jsonName in listdir():
	#Delete it as we are maing a new one
	remove(jsonName) 

jsonDict = dict()

#Creates CSV to analyze word frequency
rFile = open("scaledWordCounts.csv", "w")

rFile.write(", ".join(map(str, ["bookName"]+wordSearch))+"\n")

npWords = []
nameArray = []

#For each file in the directory....
for fileName in listdir(directory):
	#If it doesn't start with a . (to not get the hidden files)
	if not fileName.startswith('.'):
		#Open the file with utf-8 encoding
		bookFile = open(directory+fileName, "r", encoding='utf-8')
		#file.read().lower() gets the whole file in lowercase
		#.replace('-', ' ') replaces - with   becuase otherwise words with 
		# a dash between them are considered a single word
		#.split() makes it into an array of these words split by spaces
		#Counter turns this into a dictionary with a count for each word based
		# on how often it occurs
		wordcount = Counter(bookFile.read().lower().replace('-',' ').split())
		#Find number of words
		numWords = sum(wordcount.values()) 
		#Start an array containing only the file (book) name
		wordArray = []
		#For each word we are searching for....
		for word in wordSearch:
			#Append the count of that word from the wordcount dictionary
			wordArray.append((wordcount[word])/numWords)

		if len(npWords) == 0:
			npWords = np.array([wordArray])
		else:
			npWords = np.concatenate((npWords,np.array([wordArray])))

		nameArray.append(fileName)

		# #Writes to the csv
		# rFile.write(", ".join(map(str, [fileName]+wordArray))+"\n")

		# #Matches the words with the percentages with zip
		# #makes that into a dictionary
		# #Sets that as the value where the key is the book title
		# #Adds that to the jsonDict
		# jsonDict.update({fileName:dict(zip(wordSearch,wordArray))})
		# #Close the file
		bookFile.close()

# #Creates the json file
# with open(jsonName,'w') as outfile:
# 	json.dump(jsonDict, outfile, indent = 4)

multipArray = np.amax(npWords)/np.amax(npWords, axis = 0)

scaledWords = npWords*multipArray

scaledWordList = np.ndarray.tolist(scaledWords)

for i in range(len(nameArray)):
	fileName = nameArray[i]

	rFile.write(", ".join(map(str, [fileName]+scaledWordList[i]))+"\n")

	jsonDict.update({fileName:dict(zip(wordSearch,scaledWordList[i]))})


#Creates the json file
with open(jsonName,'w') as outfile:
	json.dump(jsonDict, outfile, indent = 4)

rFile.close()


# CHARACTERS:
#
# Argives:
#
# achilles 
# fight, honor, dead
# agamemnon 
# pride, greed, lead
# patroclus 
# friend, love, justice
# odysseus 
# trick, smart, plot
# menelaus 
# sad, husband, steady

# Trojans:
#
# hector 
# courage, skill, dedication
# paris 
# grace, charm, coward
# aeneas 
# devoted, fate, future
# priam 
# tired, old, king
# helen 
# beauty, wife, white