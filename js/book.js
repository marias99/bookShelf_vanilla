export default class Book {
    constructor(author, language, subject, title){
        this.author = author;
        this.language = language;
        this.subject =  subject;
        this.title = title;
    }
    render(){
        const bookLi = document.createElement('li');
        // bookLi.style.border = '5px solid black'
        bookLi.style.borderRadius = '5px';
        bookLi.style.boxShadow = `5px 5px  2px gray`
        bookLi.style.width = '20%';
        bookLi.style.height = '280px';
        bookLi.style.margin = '12px';
        bookLi.style.overflow = 'scroll';
        bookLi.style.display = 'flex';
        bookLi.style.marginLeft = '2px';
        bookLi.style.background = 'white';
        bookLi.style.display = 'flex';
        bookLi.style.flexDirection = 'column';

        const liContent = document.createElement('ul');

        const bookTitle = document.createElement('li');
        bookTitle.innerHTML = `Title: ${this.title}`;
        bookTitle.style.margin = '12px';
        bookTitle.style.listStyle = 'none';

        const bookAuth = document.createElement('li');
        bookAuth.innerHTML = `Author: ${this.author}`;
        bookAuth.style.margin = '12px';
        bookAuth.style.listStyle = 'none';

        const bookLang = document.createElement('li');
        bookLang.innerHTML = `Language: ${this.language}`;
        bookLang.style.margin = '12px';
        bookLang.style.listStyle = 'none';

        const bookSubj = document.createElement('ul');
        bookSubj.innerHTML = 'Subjects:'
        // bookSubj.style.border = '1px solid red'

        for(const sub of this.subject){
          const subElm = document.createElement('li');
          subElm.innerHTML = sub;
          subElm.style.margin = '4px';
          bookSubj.append(subElm);
        }
       
        // bookSubj.style.margin = '12px';
        bookSubj.style.listStyle = 'none';

        //just creating the button, no functionality 
        const favBtn = document.createElement('button');
        favBtn.innerHTML = 'Add to favorites';

        liContent.append(bookTitle, bookAuth, bookLang, bookSubj);
        bookLi.append(liContent, favBtn);

        return bookLi;
    }
}
