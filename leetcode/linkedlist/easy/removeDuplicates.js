var deleteDuplicates = function(head) {
    let node = head;
    
    let map = {}
    
    while(node !== null && node.next !== null){
            if(node.val === node.next.val){
                node.next = node.next.next
            }else {
                node = node.next
            }
            
        }
        
    return head
    
};
