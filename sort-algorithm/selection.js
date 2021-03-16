// duyệt từ đầu đến phần tử kề cuối danh sách, duyệt tìm phần tử 
// nhỏ nhất từ vị trí kế phần tử đang duyệt đến hết, sau đó đổi vị 
// trí của phần tử nhỏ nhất đó với phần tử đang duyệt và cứ tiếp 
// tục như vậy.

// do sử dụng 2 vòng lặp lồng vào nhau, độ phức tạp thời gian trung 
// bình của thuật toán này là O(n2).

const k = [4,2,3,5,6,1,0,0,7,8];

const selection = (arr) => {
    let min;
    for(let i = 0; i < arr.length - 1; i++){
        min = i; // tạm thời xem A[i] là nhỏ nhất
        
        for(let j = i +1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        if(min != arr[i]){   // nếu như A[min] không phải là A[i] ban đầu thì đổi chỗ
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selection(k));