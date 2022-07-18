import express from 'express'
const app = express()
import fetch from 'node-fetch'

app.get('/search/:userQuery', async (req,res)=>{
   const userQuery = req.params.userQuery
    const url  = `https://newsapi.org/v2/everything?q=${userQuery}&apiKey=e231658e9222455abd52a3d89d4c126b`
   const response = await fetch(url)
   const json = await response.json()
   const data = json.articles.map(item=>item)
    res.send(data)
})

app.get('/top-headlines', async (req,res)=>{
   const url  = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e231658e9222455abd52a3d89d4c126b`
    const response = await fetch(url)
    const json = await response.json()
    const data = json.articles.map(item=>item)
    res.send(data)
 })

 app.get('/bbc', async (req,res)=>{
   
     const url  = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e231658e9222455abd52a3d89d4c126b`
    const response = await fetch(url)
    const json = await response.json()
    const data = json.articles.map(item=>item)
    res.json(json)
 res.send(data)
 })

 app.get('/category/:categoryName',async (req,res)=>{
    const categoryName = req.params.categoryName
     const url  = `https://newsapi.org/v2/top-headlines?category=${categoryName}&apiKey=e231658e9222455abd52a3d89d4c126b`
    const response = await fetch(url)
    const json = await response.json()
    const data = json.articles.map(item=>item)
    res.send(data)
 })


app.listen(process.env.PORT || 3000,()=>{
    console.log('poost running : 8000')
})