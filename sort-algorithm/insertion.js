// Sắp xếp chèn hay insertion sort :ý tưởng của thuật toán này như 
// sau: ta có mảng ban đầu gồm phần tử A[0] xem như đã sắp xếp, 
// ta sẽ duyệt từ phần tử 1 đến n – 1, tìm cách chèn những phần tử 
// đó vào vị trí thích hợp trong mảng ban đầu đã được sắp xếp.

// O(n2) do có hai vòng lặp lồng vào nhau.

const k = [4,2,3,5,6,1,0,7,8];

const insertion = (arr) => {
    let x,pos;
    for(let i = 1; i < arr.length; i++){
        x = arr[i];
        pos = i - 1;

        // tìm vị trí thích hợp để chèn x
        while(pos >= 0 && arr[pos] > x){
            // kết hợp với dịch chuyển phần tử sang phải để chừa chỗ cho x
            arr[pos + 1] = arr[pos];
            pos--;
        }

        // chèn x vào vị trí đã tìm được
        arr[pos + 1] = x;
    }

    return arr;
}

console.log(insertion(k));