# Backend Start the Go to the project directry crypto-tracker then heat  this command in terminal to install all dependancy npm install using this command 
# add env 
in project directry inside file
MONGO_URI=mongodb://localhost:27017/crypto-tracker


# npm run dev to start the project

# node-cron: For scheduling the background job to run every 2 hours.
# First endpoint  localhost:3000/api/cryptos
# Getting Responce 
[
    {
        "_id": "670750bdcbfa7e9eb524eeb6",
        "coinId": "ethereum",
        "name": "Ethereum",
        "price": 2393.17,
        "marketCap": 288102492174.6756,
        "change24h": -2.123217369574027,
        "timestamp": "2024-10-10T03:57:49.878Z",
        "__v": 0
    },
    {
        "_id": "670750bdcbfa7e9eb524eeb4",
        "coinId": "matic-network",
        "name": "Matic-network",
        "price": 0.364818,
        "marketCap": 980217730.1185768,
        "change24h": -3.442303282377985,
        "timestamp": "2024-10-10T03:57:49.870Z",
        "__v": 0
    },
    {
        "_id": "670750bdcbfa7e9eb524eeb2",
        "coinId": "bitcoin",
        "name": "Bitcoin",
        "price": 60851,
        "marketCap": 1202716542161.6663,
        "change24h": -2.4173842373185632,
        "timestamp": "2024-10-10T03:57:49.842Z",
        "__v": 0
    }
]

# second Endpoint Getting Param according that perticuler data
localhost:3000/api/stats?coin=bitcoin
 
 {
    "price": 60828,
    "marketCap": 1202228538061.1145,
    "24hChange": -2.444104300936751
}

localhost:3000/api/stats?coin=ethereum

{
    "price": 2394.76,
    "marketCap": 288169403178.618,
    "24hChange": -1.9804419908409514
}

localhost:3000/api/stats?coin=matic-network

{
    "price": 0.364191,
    "marketCap": 978112428.4596161,
    "24hChange": -3.633845044259009
}


# 3 rd Endpoint for query bitcoin ,ethereum,matic-network
localhost:3000/api/deviation?coin=bitcoin
localhost:3000/api/deviation?coin=ethereum
localhost:3000/api/deviation?coin=matic-network

