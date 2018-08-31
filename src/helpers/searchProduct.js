export async function searchProduct (key, searchIndex) {
	let list = [];
    list = searchIndex.filter(item => {
        let search = item.name.toLowerCase();
        return search.startsWith(key);
    });
    
    return list;
}