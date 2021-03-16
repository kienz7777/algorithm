// Tìm kiếm nội suy (Interpolation Search) là biến thể cải tiến 
// của Tìm kiếm nhị phân (Binary Search). Thay vì xác định điểm 
// chính giữa của danh sách, thuật toán tìm kiếm nội suy xác định 
// điểm gần với vị trí của phần tử cần tìm, do đó tối ưu được thời 
// gian hơn so với thuật toán tìm kiếm nhị phân. Độ phức tạp thời 
// gian cũng vì thế mà tốt hơn là O(log(log(n))).

// Để giải thuật tìm kiếm này làm việc chính xác thì tập dữ liệu phải được sắp xếp.


const k = [1,2,3,4,5,6,7,8] , x = 5;

const interpolation = (arr,x) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while((start <= end) && (x >= arr[start]) && (x <= arr[end])){
        
        mid =Math.floor(start + (((end - start) /(arr[end] - arr[start])) * (x - arr[start]))) ;

        if(arr[mid] == x) return mid;

        else if(arr[mid] < x){
            start = mid +1;
        }
        else if(arr[mid] > x){
            end = mid -1;
        }
    }

    return false;
}

console.log(interpolation(k,x));