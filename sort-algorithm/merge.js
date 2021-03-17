// Sắp xếp trộn (merge sort) là một thuật toán dựa trên kỹ thuật chia để trị, ý tưởng của thuật toán này như sau: chia đôi mảng thành hai mảng con, sắp xếp hai mảng con đó và trộn lại theo đúng thứ tự, mảng con được sắp xếp bằng cách tương tự.

// Giả sử left là vị trí đầu và right là cuối mảng đang xét, cụ thể các bước của thuật toán như sau:

// 1.Nếu mảng còn có thể chia đôi được (tức left < right)
// 2.Tìm vị trí chính giữa mảng
// 3.Sắp xếp mảng thứ nhất (từ vị trí left đến mid)
// 4.Sắp xếp mảng thứ 2 (từ vị trí mid + 1 đến right)
// 5.Trộn hai mảng đã sắp xếp với nhau

// Merge Sort có độ phức tạp thời gian trung bình là O(nlog(n))

const k = [4,2,3,5,6,1,0,7,8];

const _mergeArray = (arr1,arr2) => {
    const arr = [];

    while(arr1.length && arr2.length){
        arr.push(arr1[0] > arr2[0] ? arr2.shift() : arr1.shift())
    }

    //if we still have values in one of two array, let's add them at the end of `arr`
    while (arr1.length) {
        arr.push(arr1.shift())
    }
    while (arr2.length) {
        arr.push(arr2.shift())
    }

    return arr;
}

const mergeSort = (arr) => {
    if(arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const arr_l = arr.slice(0,mid);     // cut between 0 to mid -1
    const arr_r = arr.slice(mid,arr.length); // cut between mid to length -1

    const sorted_l = mergeSort(arr_l);
    const sorted_r = mergeSort(arr_r);

    return _mergeArray(sorted_l,sorted_r);

}

console.log(mergeSort(k));