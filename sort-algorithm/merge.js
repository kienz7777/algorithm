// Sắp xếp trộn (merge sort) là một thuật toán dựa trên kỹ thuật chia để trị, ý tưởng của thuật toán này như sau: chia đôi mảng thành hai mảng con, sắp xếp hai mảng con đó và trộn lại theo đúng thứ tự, mảng con được sắp xếp bằng cách tương tự.

// Giả sử left là vị trí đầu và right là cuối mảng đang xét, cụ thể các bước của thuật toán như sau:

// 1.Nếu mảng còn có thể chia đôi được (tức left < right)
// 2.Tìm vị trí chính giữa mảng
// 3.Sắp xếp mảng thứ nhất (từ vị trí left đến mid)
// 4.Sắp xếp mảng thứ 2 (từ vị trí mid + 1 đến right)
// 5.Trộn hai mảng đã sắp xếp với nhau

// Merge Sort có độ phức tạp thời gian trung bình là O(nlog(n))

const k = [4,2,3,5,6,1,0,7,8];

const merge = (arr,left,mid,right) => {
    let l1 = mid - left + 1; // Số phần tử của mảng thứ nhất
    let l2 = right - mid; // Số phần tử của mảng thứ hai

    // Tạo hai mảng tạm để lưu hai mảng con
    let arr1 = [], arr2 = [];

    // Sao chép phần tử 2 mảng con vào mảng tạm
    for(let i = 0; i < l1; i++){
        arr1.push(arr[left+i]);
    }
    for(let i = 0; i < l2; i++){
        arr2.push(arr[mid+i+1]);
    }

    // current là vị trí hiện tại trong mảng A
    let i = 0, j = 0;

    // Trộn hai mảng vào nhau theo đúng thứ tự
    while (i < l1 && j < l2){
        if (arr1[i] <= arr2[j])
            arr.push(arr1[i++]);
        else
            arr.push(arr2[j++]);
    }

    // Nếu mảng thứ nhất còn phần tử thì copy nó vào mảng A
    while (i < l1){
        arr.push(arr1[i++]);
    }

    // Nếu mảng thứ hai còn phần tử thì copy nó vào mảng A
    while (j < l2){
        arr.push(arr2[j++]);
    }
    //return arr;
}

const mergeSort = (arr,left,right) => {
    // Kiểm tra xem còn chia đôi mảng được không
    if (left < right)
    {
        // Tìm phần tử chính giữa
        // left + (right - left) / 2 tương đương với (left + right) / 2
        // việc này giúp tránh bị tràn số với left, right quá lớn
        let mid = Math.floor(left + (right - left) / 2);
 
        // Sắp xếp mảng thứ nhất
        mergeSort(arr, left, mid);
        // Sắp xếp mảng thứ hai
        mergeSort(arr, mid + 1, right);

        // Trộn hai mảng đã sắp xếp
        merge(arr, left, mid, right);

        
    }
    return arr;
}

console.log(mergeSort(k,0,k.length-1));