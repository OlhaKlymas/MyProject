
let store =
 {
	// data: [
	// {tag:"h1", body:"Olha Klymas"},
	// {tag: "img", src:"../images/myfoto.img"},
	// {tag: "ul", body: "3"},
	// {tag: "li", body: "HTML"},	
	// {tag: "li", body: "css"},	
	// {tag: "li", body: "JS"},
	// {tag: "p", body: "«язык гипертекстовой разметки» — HTML (или XHTML). Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный текст отображается на экране монитора компьютера или мобильного устройства."},
	// {tag: "p", body: "каскадные таблицы стилей — формальный язык описания внешнего вида документа, написанного с использованием языка разметки."},
	// {tag: "p", body: "мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией языка ECMAScript (стандарт ECMA-262). JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."}
	// ];

// 	data: [
//   {
//     "userId": "one",
//     "id": "tree",
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": "one",
//     "id": "tree",
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": "one",
//     "id": "tree",
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//   },
//   {
//     "userId": "one",
//     "id": "tree",
//     "title": "eum et est occaecati",
//     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//   },
//   {
//     "userId": "one",
//     "id": "tree",
//     "title": "nesciunt quas odio",
//     "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
//   },
//   {
//     "userId": "one",
//     "id": "tree",
//     "title": "dolorem eum magni eos aperiam quia",
//     "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
//   },
//   {
//     "userId": "one",
//     "id": "tree",
//     "title": "magnam facilis autem",
//     "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
//   },
//   {
//     "userId": "one",
//     "id": "tree",
//     "title": "dolorem dolore est ipsam",
//     "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
//   },
//   {
//     "userId": "one",
//     "id": "tree",
//     "title": "nesciunt iure omnis dolorem tempora et accusantium",
//     "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
//   },
//   {
//     "userId": "one",
//     "id": "one",
//     "title": "optio molestias id quia eum",
//     "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
//   },
//   {
//     "userId": "one",
//     "id": "one",
//     "title": "et ea vero quia laudantium autem",
//     "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
//   }
// ],

data:[],
init: function(url = 'https://jsonplaceholder.typicode.com/posts'){
  return fetch(url)
  .then(response => response.json())
  .then(json => store.data = json)
}
}

export default store;