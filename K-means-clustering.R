library(factoextra)
library(cluster)
#Load the data into the dataframe
df <- iris
#Remove any missing values
df <- na.omit(df)
#Remove the species column from the dataset
df_iris <- df
df <- df[-c(5)]
#Scale all of the values from 0 to 1
df <- scale(df)
#Create a graph to chose the optimal number of clusters
fviz_nbclust(df, kmeans, method = "wss")
km <- kmeans(df, 3, 25)
fviz_cluster(km, df)