import { Article } from "./js/Article";
import { Modal } from "./js/Modal";
import { ArticleModal } from "./js/ArticleModal";
const data = [
    {id: 1,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: "./src/img/strategies/1.jpg",
    tags: ['Art', 'Design'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    data: '01.01.2024'

},
{id: 2,
    title: 'Motivation Is The First Step To Success',
    urlToImage: "./src/img/strategies/2.jpg",
    tags: ['Art', 'Design'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    data: '01.01.2024'

},
{id: 3,
    title: 'Success Steps For Your Personal Or Business Life',
    urlToImage: "./src/img/strategies/3.jpg",  
    tags: ['Art', 'Design'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    data: '01.01.2024'

}
]


window.onload = function() {
    console.log('Hello');

    //Render Articles

    if(data) {
        renderArticlesToDom();
    }

    //Tags
    addTagsClickHandler();

    //Generate Base Modal from Modal class
    addToolsClickHandler();
}

const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        if(e.target.classList.contains('tag')) {
            let clickedTag= e.target;
            removeSelectedTags();
            selectClickTags(clickedTag);
            if(clickedTag.innerText === 'All') {
                showAllStrategies();

            } else {
                filterStrategiesBySelectedTag(clickedTag.innerText);

            }
        }

    })
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
    tags.forEach(tag=> {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    })
}

const selectClickTags = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
}

const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hidden');
    }
)}

const filterStrategiesBySelectedTag = (selectedTag) => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(tag=> {
            if(tag.innerText===selectedTag) {
                strategy.classList.remove('strategy_hidden');
            }
        })
    })

}

const renderArticlesToDom = () => {
    let strategiesWrapper = getStrategiesWrapper(); 
    generateArticles(data).forEach(article => {
        strategiesWrapper.append(article.generateArticle());    
    });

    addStrategyClickHandler();

}

const getStrategiesWrapper = () => {
    const strategiesContainer = document.querySelector('.strategy-wrapper');
    strategiesContainer.innerHTML='';
    return strategiesContainer;
}

const generateArticles =  (data) => {
    let articles = [];
    data.forEach(article => {
    articles.push(new Article(article));
    });
    return articles;
}

const addToolsClickHandler = () => {
    document.querySelector('.tools__button .button').addEventListener('click', () => {
        generateToolsModal();
    })
};

const generateToolsModal = () => {
    renderModalWindow('Test content for Tools Modal');
}

const renderModalWindow = (content) => {
let modal = new Modal('tools-modal');
modal.buildModal(content);

}

const addStrategyClickHandler = () => {
    document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {
        if(e.target.closest('.strategy')){

            let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');  
           let clickedStrategyData = getClickedData(clickedStrategyId);

           renderArticleModalWindow(clickedStrategyData);
        }

    });
}

const getClickedData = (id) => {
return data.find(article => article.id == id);
}
const renderArticleModalWindow = (article) => {
    let modal = new ArticleModal('article-modal', article);
    
    modal.renderModal();
    
    }