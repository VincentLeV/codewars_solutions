// class PaginationHelper {
//     constructor(collection, itemsPerPage) {
//         this.collection = collection
//         this.itemsPerPage = itemsPerPage
//     }

//     pageCount() {
//         return Math.ceil(this.collection.length / this.itemsPerPage)
//     }

//     itemCount() {
//         return this.collection.length
//     }

//     pageItemCount(pageIndex) {
//         const start = pageIndex * this.itemsPerPage
//         const end = start + this.itemsPerPage
//         return this.collection.slice(start, end).length > 0 ? this.collection.slice(start, end).length : -1
//     }

//     pageIndex(itemIndex) {
//         if ( itemIndex > this.itemCount() + 1 || itemIndex < 0 ) {
//             return -1
//         }
    
//         for ( let i = 0; i < this.pageCount(); i++ ) {
//             if ( itemIndex < this.pageItemCount(i) ) {
//                 return i
//             } else if ( itemIndex > this.pageItemCount(i) ) {
//                 return i + 1
//             }
//         }
//     }
// }

function PaginationHelper(collection, itemsPerPage){
    this.collection = collection
    this.itemsPerPage = itemsPerPage
}

PaginationHelper.prototype.itemCount = function() {
    return this.collection.length
}

PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length / this.itemsPerPage)
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    const start = pageIndex * this.itemsPerPage
    const end = start + this.itemsPerPage
    return this.collection.slice(start, end).length > 0 ? this.collection.slice(start, end).length : -1
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if ( itemIndex > this.itemCount() + 1 || itemIndex < 0 || this.itemCount() === 0 ) {
        return -1
    }

    for ( let i = 0; i < this.pageCount(); i++ ) {
        if ( itemIndex < this.pageItemCount(i) ) {
            return i
        } else if ( itemIndex > this.pageItemCount(i) ) {
            console.log()
            return i + 1
        }
    }
}

// const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
const helper = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10)
// console.log(helper.pageCount())
// console.log(helper.itemCount())
// console.log(helper.pageItemCount(0))
// console.log(helper.pageItemCount(1))
// console.log(helper.pageItemCount(2))
// console.log(helper.pageItemCount(30))
// console.log(helper.pageIndex(5))
console.log(helper.pageIndex(3))
console.log(helper.pageIndex(20))
// console.log(helper.pageIndex(30))