
//Node is defined as
var Node = function(data) {
    this.data = data;
    this.next = null;
}

function insertHead(head, data){
    var node = new Node(data);
    if (head == null) {
        head = node;
    }
    else {  
        var oldHead = head;
        head = node;
        head.next = oldHead;
    }      
    return head;
}

function insertTail(head, data) {
    const node = new Node(data);
    
    if (head === null) head = node;
    
    let last = head; // Khởi tạo last trỏ tới head
    while(last.next != null) {
      last = last.next; //Duyệt danh sách liên kết đến cuối. Node cuối là node có next = NULL
    }
    
    last.next = node; //Gán next của thằng cuối vào node mới. Khi đó node mới sẽ là thằng cuối
    
    return head;
}

function insertAnyLocation(head,data,position){
    if(position == 0 || head == null){
        head = insertHead(head, data); // Nếu vị trí chèn là 0, tức là thêm vào đầu
    }
    else{
        // Bắt đầu tìm vị trí cần chèn. Ta sẽ dùng k để đếm cho vị trí
        let k = 1;
        let p = head;
        while(p != null && k != position){
            p = p.next;
            ++k;
        }
        if(k != position){
            // Nếu duyệt hết danh sách lk rồi mà vẫn chưa đến vị trí cần chèn, ta sẽ mặc định chèn cuối
            head = insertTail(head, data);
            
        }else{
            var node = new Node(data);
            node.next = p.next;
            p.next = node;
        }
    }
    return head;
}
  
function print(head) {
    let current = head;
    while(current !== null) {
      console.log(current.data);
      
      current = current.next;
    }
}


let head;
head = new Node("abc");

insertTail(head,"xyz");
insertHead(head,"ppp");
insertAnyLocation(head,"xxx",1);

print(head);