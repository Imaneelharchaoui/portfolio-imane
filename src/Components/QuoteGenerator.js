import React, { Component } from 'react';
import axios from 'axios';

class RandomQuote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: '',
            author: ''
        }
    }

    componentDidMount() {
        this.getQuote()
    }

    getQuote() {
        let url = 'quotes.json'

        axios.get(url)
            .then(res => {
                let data = res.data
                let quoteNumber = Math.floor(Math.random() * data.length) //get a random index
                let randomQuote = data[quoteNumber] //the random quote

                this.setState({
                    quote: randomQuote['text'],
                    author: randomQuote['author']
                })
            })
    }

    getNewQuote = () => {
        this.getQuote()
    }

    render() {
        const { quote, author } = this.state
        return (
            <div className="container">
                <h data-aos="fade-right"> Some quotes:</h>
                <div className="wrapper00">
                    <div id='quote-box'>
                        <div id='text'><h4><span className="qtIcon"><i class="fas fa-quote-left"></i></span>  {quote}</h4></div>
                        <div id='author'><h4>- {author}</h4></div>
                        <div id='buttons'>



                            <button type="button" id='new-quote' className="button" onClick={this.getNewQuote}>New Quote</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomQuote;
