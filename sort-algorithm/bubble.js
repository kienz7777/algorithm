// Duyệt qua danh sách, làm cho các phần tử lớn nhất hoặc nhỏ nhất 
// dịch chuyển về phía cuối danh sách, tiếp tục lại làm phần tử lớn 
// nhất hoặc nhỏ nhất kế đó dịch chuyển về cuối hay chính là làm cho 
// phần tử nhỏ nhất (hoặc lớn nhất) nổi lên, cứ như vậy cho đến hết 
// danh sách Cụ thể các bước thực hiện của giải thuật này như sau:

// Sắp xếp nổi bọt là một thuật toán sắp xếp ổn định. Về độ phức tạp,
// do dùng hai vòng lặp lồng vào nhau nên độ phức tạp thời gian trung
// bình của thuật toán này là O(n2).


const k = [4,2,3,5,6,1,7,8];

const bubble = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubble(k));