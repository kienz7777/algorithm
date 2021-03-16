// Tìm kiếm tuyến tính(Linear Search) : là một giải thuật tìm kiếm 
// rất cơ bản. Trong kiểu tìm kiếm này, một hoạt động tìm kiếm liên 
// tiếp được diễn ra qua tất cả từng phần tử.

// Mỗi phần tử đều được kiểm tra và nếu tìm thấy bất kỳ kết nối nào 
// thì phần tử cụ thể đó được trả về; nếu không tìm thấy thì quá 
// trình tìm kiếm tiếp tục diễn ra cho tới khi tìm kiếm hết dữ liệu.


const k = [1,2,3,4,5,6] , x = 5;

const linear = (arr,x) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == x){
            return true;
        }
    }
    return false;
}

console.log(linear(k,x));