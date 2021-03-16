// Để Binary Search làm việc thì mảng phải cần được sắp xếp. 
// Binary Search là Ο(log n).

// Binary Search tìm kiếm một phần tử cụ thể bằng cách so sánh 
// phần tử tại vị trí giữa nhất của tập dữ liệu. Nếu tìm thấy kết 
// nối thì chỉ mục của phần tử được trả về. Nếu phần tử cần tìm là 
// lớn hơn giá trị phần tử giữa thì phần tử cần tìm được tìm trong 
// mảng con nằm ở bên phải phần tử giữa; nếu không thì sẽ tìm ở trong
// mảng con nằm ở bên trái phần tử giữa. Tiến trình sẽ tiếp tục như 
// vậy trên mảng con cho tới khi tìm hết mọi phần tử trên mảng con 
// này.

const k = [4,2,3,5,6,1,7,8] , x = 6;

// const sort = (arr) => {
//     for(let i = 0; i < arr.length-1 ; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] > arr[j]){
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

const binary = (arr,x) => {
    let start = 0;
    let end = arr.length-1;
   
    arr.sort();

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(arr[mid] == x) return true;

        else if(arr[mid] < x){
            start = mid + 1;
        }

        else if(arr[mid] > x){
            end = mid - 1;
        }
    }
    return false;
}

console.log(binary(k,x));

