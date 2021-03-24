

const k = [4,2,3,5,6,1,0,7,8];

const partition = (arr,start,end) => {
    if(start >= end) return arr; // Kiểm tra xem nếu mảng có 1 phần tử thì không cần sắp xếp

    var pivot = arr[Math.floor( (start+end) / 2 )];

    var i = start, j = end;
    while (i < j)
    {
        while (arr[i] < pivot) // Nếu phần tử bên trái nhỏ hơn pivot thì ok, bỏ qua
            i++;
        while (arr[j] > pivot) // Nếu phần tử bên phải nhỏ hơn pivot thì ok, bỏ qua
            j--;

        // Sau khi kết thúc hai vòng while ở trên thì chắc chắn
        // vị trí A[i] phải lớn hơn pivot và A[j] phải nhỏ hơn pivot
        // nếu i < j
        if (i <= j)
        {
            if (i < j){ // nếu i != j (tức không trùng thì mới cần hoán đổi)
                //swap(arr[i], arr[j]); // Thực hiện đổi chổ ta được A[i] < pivot và A[j] > pivot
                let temp = arr[j];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            i++;
            j--;
        }
    }

    return i;
}

const quickSort = (arr,start,end) => {
    var index = partition(arr, start, end);

    if (start < index - 1)
        quickSort(arr, start, index - 1);

    if (index < end)
        quickSort(arr, index, end);

}

console.log(quickSort(k,0,k.length-1));