import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Newsitem from './Headlines';
import Spinner from './spinner.js';
export class News extends Component {
  static defaultProps={
    country:"in",
    pageSize:8,
    category:"general"
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // articles=[
  // //   {
  // //     "source": {
  // //         "id": "news-com-au",
  // //         "name": "News.com.au"
  // //     },
  // //     "author": null,
  // //     "title": "Aussie cricket legend’s tragic reveal",
  // //     "description": "Former Australian cricket captain Allan Border has revealed he has been battling Parkinson&rsquo;s disease for the past seven years.",
  // //     "url": "https://www.news.com.au/sport/cricket/australian-cricket-legend-allan-border-has-parkinsons-disease/news-story/0aa6bbc66eaa2d976adfe5b0d7c6c989",
  // //     "urlToImage": "https://content.api.news/v3/images/bin/bfdd99638cc12c6172fe6118f1243946",
  // //     "publishedAt": "2023-06-30T12:30:00Z",
  // //     "content": "Former Australian cricket captain Allan Border has revealed he has been battling Parkinson’s disease for the past seven years.\r\nThe cricket legend revealed the shocking news in The Australian in an a… [+1786 chars]"
  // // },
  // // {
  // //     "source": {
  // //         "id": "espn-cric-info",
  // //         "name": "ESPN Cric Info"
  // //     },
  // //     "author": null,
  // //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  // //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  // //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  // //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  // //     "publishedAt": "2020-04-27T11:41:47Z",
  // //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  // // },
  // // {
  // //     "source": {
  // //         "id": "espn-cric-info",
  // //         "name": "ESPN Cric Info"
  // //     },
  // //     "author": null,
  // //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  // //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  // //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  // //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  // //     "publishedAt": "2020-03-30T15:26:05Z",
  // //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  // // }
  // ]
  constructor(props){
    super(props);
    console.log("hello i am in constructor component")
    this.state={
      //articles:this.articles,
      articles:[],
      loading:false,
      page:1
    }
    // document.title="News-"+this.props.category
    document.title=`News-${this.capitalizeFirstLetter(this.props.category)}`
  }
 
  async update(pageno){
    //if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
      //let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c3ea7e2d557844e5b17021d9314b46bd&page=${this.state.page}&pageSize=${this.props.pageSize}`
      const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3023c9415d3149b29d2897709d4d4515&page=${this.state.page}&pageSize=${this.props.pageSize}`

      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      //console.log(parsedData);
      this.setState({
        articles:parsedData.articles,
        //page:this.state.page+1,
        loading:false
      })
    //}
    
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json() 
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
    })

  }
  
  async componentDidMount() {
    // this will run after render
    
    console.log("component did mount")
    this.update()
    // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c3ea7e2d557844e5b17021d9314b46bd&pageSize=${this.props.pageSize}`
    // // &pageSize=2//means two news on one page //it is given in news api docuentation //from there we use this
    // this.setState({loading:true})
    // let data=await fetch(url);
    // let parsedData=await data.json();
    // console.log(parsedData);
    // this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults, loading:false});
  }
  handlenextClick=async()=>{
    console.log("next")
    this.setState({page:this.state.page+1});
    this.update()
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
    //   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c3ea7e2d557844e5b17021d9314b46bd&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    //   this.setState({loading:true})
    //   let data=await fetch(url);
    //   let parsedData=await data.json();
    //   console.log(parsedData);
    //   this.setState({
    //     articles:parsedData.articles,
    //     page:this.state.page+1,
    //     loading:false
    //   })
    // }
  }
  handleprevClick=async()=>{
    console.log("prev")
    this.setState({page:this.state.page-1});
    this.update()
    // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c3ea7e2d557844e5b17021d9314b46bd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    // this.setState({loading:true})
    // let data=await fetch(url);
    // let parsedData=await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles:parsedData.articles,
    //   page:this.state.page-1,
    //   loading:false
    // })
    
  }
  render() {
    // let {pageSize}=this.props
    console.log("render")
    return (
     
      <div className="container my-3">
         {/* console.log("render") not executed*/}
        
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
         <h2   style={{textAlign:"center"}}>Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
         {this.state.loading && <Spinner/>}
        <div className="row my-3">
        {!this.state.loading &&this.state.articles.map((element)=>{
           return <div className="col-md-3" key={element.url}>
           <Newsitem  title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} author={element.author} publishedat={element.publishedAt} source={element.source.name}/>
           </div>
  })}
          
        </div>
        <div className="container d-flex justify-content-between">
          {/* bootstrap flex class used to set the buttons relative position */}
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}  type="button" className="btn btn-dark" onClick={this.handlenextClick}>Next &rarr;</button>
        </div>
      </div>
 
      
    )
  }
}

export default News

// import React, { Component } from 'react'
// import NewsItem from './Newsitem.js'
// import Spinner from './spinner.js';
// import PropTypes from 'prop-types'


// export class News extends Component {
//     static defaultProps = {
//         country: 'in',
//         pageSize: 8,
//         category: 'general',
//     }

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     }
//     capitalizeFirstLetter = (string)=> {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//       }
//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1
//         }
//         document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
//     }

//     async updateNews() {
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true });
//         let data = await fetch(url);
//         let parsedData = await data.json() 
//         this.setState({
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             loading: false
//         })

//     }
//     async componentDidMount() {
//         this.updateNews();
//     }

//     handlePrevClick = async () => {
//         this.setState({ page: this.state.page - 1 });
//         this.updateNews();
//     }

//     handleNextClick = async () => {
//         this.setState({ page: this.state.page + 1 });
//         this.updateNews()
//     }

//     render() {
//         return (
//             <div className="container my-3">
//                 <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
//                 {this.state.loading && <Spinner />}
//                 <div className="row">
//                     {!this.state.loading && this.state.articles.map((element) => {
//                         return <div className="col-md-4" key={element.url}>
//                             <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                         </div>
//                     })}
//                 </div>
//                 <div className="container d-flex justify-content-between">
//                     <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default News