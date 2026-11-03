function BookCard({ title, author, pages }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Pages: {pages}</p>
        </div>
    );
}

function App() {
    const books = [
        { id: 1, title: "Atomic Habits", author: "James Clear", pages: 320 },
        { id: 2, title: "Deep Work", author: "Cal Newport", pages: 296 },
        { id: 3, title: "Clean Code", author: "Robert Martin", pages: 464 }
    ];

    return (
        <div>
            <h1>Library Books</h1>
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    pages={book.pages}
                />
            ))}
        </div>
    );
}

export default App;






// the main thigd ia then toioantin the wholemaorweplf di thebseucees ijtjeb whole owrifn

// tghe ian awkjeb ldf xajsBD f:Da;sWdbzs fkasduf asdukfadfawbefwaebfwabeflwGRFBlwbrfakwer,fJRF
// dh fzkjjxchszch zsdhcsvh vdaSDhz xjhcz dnchskD<Hc SDVj,SNXFsLJ<DF SLDS<jzsfd



// the maskasdhbdl,wfdawebf ajwehf ewr,f hawdfakwdfwqefwyfb    


// the  makn tsjkeybarfyubfehjbfyawebfkauwgfekrl



// the finctuodfj;.SDFLSIDJF djflWBF wlf;WF
// trhwtrtqtjqkeblajbgqeffb;iqerlfqerbfqierbfqlerbqitqu3;r

// the different things are like fir in the box
//  the text aew stactter and  gathers well