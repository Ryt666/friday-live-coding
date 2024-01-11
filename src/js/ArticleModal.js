import {Modal} from './Modal';

export class ArticleModal extends Modal{
constructor(classes, {id, title, urlToImage, tags, content, date}){
    super(classes);
    this.id = id;
    this.title = title;
    this.urlToImage  = urlToImage;
    this.tags = tags;
    this.content  = content;
    this.date  = date;
};

//Article Modal generator
generateContent() {
    let template = '';
    let article = document.createElement('div');
    article.className = 'article-modal__content';

    this.urlToImage &&
        (template += ` <img src=${this.urlToImage} alt="strategy" />`);

    if (this.title || this.tags || this.content || this.date) {
        template += `<div class="strategy__content">`;


        this.content &&
            (template += `<p class="strategy__text">${this.content}</p>`);


        this.title &&
            (template += `<h3 class="strategy__name">${this.title}</h3>`);

        this.date &&
            (template += `<p class="strategy__date">${this.date}</p>`);

            
        if (this.tags) {
            template += `<div class="strategies__tags tags">`;

            this.tags.map(tag => {
                template += `<span class="tag tag_colored">${tag}</span>`;
            })

            template += `</div>`;
        }

        template += `</div>`;
    }

    article.innerHTML = template;

    return this.content;

}

renderModal() {
    let content = this.generateContent();
    super.buildModal(content);
}
}