// Merge two sorted linked lists and return it as a sorted list. 
// The list should be made by splicing together the nodes of the 
// first two lists.

 
// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]


const l1 = [1,2,4], l2 = [1,3,4];


//Node is defined as
var Node = function(data) {
    this.data = data;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    let dummyHead = null;
    
    let prev = dummyHead;
    
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        }
        else if (l2.val < l1.val) {
            prev.next = l2;
            l2 = l2.next;
        }
        
        prev = prev.next;
    }
   
    if (l1 != null) prev.next = l1;
    else prev.next = l2;
    
    return dummyHead.next;
};

console.log(mergeTwoLists(l1,l2));