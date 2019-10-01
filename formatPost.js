
const module1 = 'Obama visited Facebook headquarters: http://bit.ly/xyz @elversatile';
const module2 = [{
    position: {
        startIndex: 14,
        endIndex: 22
    },
    type: "Entity"
},
{
    position: {
        startIndex: 0,
        endIndex: 5
    },
    type: "Entity"
},
{
    position: {
        startIndex: 55,
        endIndex: 67
    },
    type: "TwitterUsername"
},
{
    position: {
        startIndex: 37,
        endIndex: 54
    },
    type: "Link"
},
];

class FormatPost {
    constructor(crawlfeed, extractedfeed) {
        this.crawlfeed = crawlfeed;
        this.extractedfeed = extractedfeed;
    }

    getCrawlFeed() {
        console.log(this.crawlfeed);
        return this.crawlfeed;
    }

    getExtractedFeed() {
        console.log(this.extractedfeed);
        return this.extractedfeed;
    }

    parseEntity(post, concept) {
        return post ? post.replace(concept, `<strong>${concept}</strong>`) : '';
    }

    parseLink(post, concept) {
        return post ? post.replace(concept, `<a href="${concept}">${concept}</a>`) : '';
    }

    parseUsername(post, concept) {
        return post ? post.replace(concept, `@<a href="http://twitter.com/${concept.substring(1)}">${concept.substring(1)}</a>`) : '';
    }

    parseElement(type, post, concept) {
        if (type === 'Entity') {
            post = this.parseEntity(post, concept);
        }
        else if (type === 'Link') {
            post = this.parseLink(post, concept);
        }
        else if (type === 'TwitterUsername') {
            post = this.parseUsername(post, concept);
        }
        return post;
    }

    getFormattedPost() {
        let parsedFeed = this.crawlfeed;

        this.extractedfeed.forEach(element => {
            let { type } = element;
            let word = this.crawlfeed.substring(element.position.startIndex, element.position.endIndex);
            parsedFeed = this.parseElement(type, parsedFeed, word)
        });

        console.log(parsedFeed);

        return parsedFeed;

    }

}


let newPost = new FormatPost(module1, module2);
newPost.getCrawlFeed(); // returns module 1
newPost.getExtractedFeed(); //returns module 2
newPost.getFormattedPost(); //returns module 3


