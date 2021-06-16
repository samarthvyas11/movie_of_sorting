let size = 0;
        let array = [];
        let array_copy = []
        let box ="";
        let sort_type ="";
        let swaps = [];
        let speed = 500;
        function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
        }  
            
       function bubble_called(){
           sort_type = "Bubble";
           information = '<div class="inner-info" style="display: flex;"><div><br><hr style="width:80%;"><br><h2 style="margin-left:15%;font-size:180%; ">Bubble Sort</h2><p>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems</p><h3 style="margin-left:15%; font-size:160%;">Performance</h3><table style="margin-left:15%; font-size:120%;"><tbody><tr><td>Worst-case time complexity</td><td>O(n^2)</td></tr><tr><td>Average-case time complexity</td><td>O(n^2)</td></tr><tr><td>Best-case time complexity</td><td>O(n)</td></tr><tr><td>Worst-case-space time complexity</td><td>O(1)</td></tr></tbody></table><br>  <br><hr style="width:80%;"><br></div><div style="margin-top: 100px;"><img src="logo.png" class="img1" style="width: 361px;margin-right: 38px;"></div>  </div>';
		                  
		   
           info = document.getElementsByClassName("information");
           info[0].innerHTML = information;
		   
		   

           document.getElementById("bubble").style.backgroundColor = "blueviolet";
           document.getElementById("selection").style.backgroundColor = 'transparent';
           document.getElementById("insertion").style.backgroundColor =  'transparent';
          // document.getElementById("merge").style.backgroundColor =  'transparent';
           document.getElementById("heap").style.backgroundColor =  'transparent';
           document.getElementById("quick").style.backgroundColor =  'transparent';
       }
       function selection_called(){
           sort_type = "Selection";
           information = '<div class="inner-info" style="display: flex;"><div><br><hr style="width:80%;"><br><h2 style="margin-left:15%;font-size:180%; ">Selection Sort</h2><p>Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.</p><h3 style="margin-left:15%; font-size:160%;">Performance</h3><table style="margin-left:15%; font-size:120%;"><tbody><tr><td>Worst-case time complexity</td><td>O(n^2)</td></tr><tr><td>Average-case time complexity</td><td>O(n^2)</td></tr><tr><td>Best-case time complexity</td><td>O(n^2)</td></tr><tr><td>Worst-case-space time complexity</td><td>O(1)</td></tr></tbody></table><br>  <br><hr style="width:70%;"><br><br><br></div><div style="margin-top: 100px;"><img src="logo1.png" class="img1" style="width: 361px;margin-right: 38px;"></div>  </div>';
           info = document.getElementsByClassName("information");
           info[0].innerHTML = information;
           document.getElementById("bubble").style.backgroundColor =  'transparent';
           document.getElementById("selection").style.backgroundColor = "blueviolet";
           document.getElementById("insertion").style.backgroundColor =  'transparent';
          // document.getElementById("merge").style.backgroundColor =  'transparent';
           document.getElementById("heap").style.backgroundColor =  'transparent';
           document.getElementById("quick").style.backgroundColor =  'transparent';
       }
       function insertion_called(){
           sort_type = "Insertion";
           information = '<div class="inner-info" style="display: flex;"><div><br><hr style="width:80%;"><br><h2 style="margin-left:15%;font-size:180%; ">Insertion Sort</h2><p>Insertion Sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.</p><h3 style="margin-left:15%; font-size:160%;">Performance</h3><table style="margin-left:15%; font-size:120%;"><tbody><tr><td>Worst-case time complexity</td><td>O(n^2)</td></tr><tr><td>Average-case time complexity</td><td>O(n^2)</td></tr><tr><td>Best-case time complexity</td><td>O(n)</td></tr><tr><td>Worst-case-space time complexity</td><td>O(1)</td></tr></tbody></table><br>  <br><hr style="width:70%;"><br><br><br></div><div style="margin-top: 100px;"><img src="logo.png"class="img1" style="width: 361px;margin-right: 38px;"></div>  </div>';
           info = document.getElementsByClassName("information");
           info[0].innerHTML = information;
           document.getElementById("bubble").style.backgroundColor =  'transparent';
           document.getElementById("selection").style.backgroundColor =  'transparent';
           document.getElementById("insertion").style.backgroundColor = "blueviolet";
         //  document.getElementById("merge").style.backgroundColor =  'transparent';
           document.getElementById("heap").style.backgroundColor =  'transparent';
           document.getElementById("quick").style.backgroundColor =  'transparent';
       }
       function heap_called(){
           sort_type = "Heap";
           info = document.getElementsByClassName("information");
           information = '<div class="inner-info" style="display: flex;"><div><h2 style="margin-left:15%;font-size:180%; ">Heap Sort</h2><p>Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements. </p><h3 style="margin-left:15%; font-size:160%;">Performance</h3><table style="margin-left:15%; font-size:120%;"><tbody><tr><td>Worst-case time complexity</td><td>O(nlogn)</td></tr><tr><td>Average-case time complexity</td><td>O(nlogn)</td></tr><tr><td>Best-case time complexity</td><td>O(nlogn)</td></tr><tr><td>Worst-case-space time complexity</td><td>O(1)</td></tr></tbody></table><br>  <br><hr style="width:70%;"><br><br><br></div><div style="margin-top: 100px;"><img src="logo1.png" class="img1" style="width: 361px;margin-right: 38px;"></div>  </div>';
           info[0].innerHTML = information;
           document.getElementById("bubble").style.backgroundColor =  'transparent';
           document.getElementById("selection").style.backgroundColor =  'transparent';
           document.getElementById("insertion").style.backgroundColor =  'transparent';
         //  document.getElementById("merge").style.backgroundColor =  'transparent';
           document.getElementById("heap").style.backgroundColor = "blueviolet";
           document.getElementById("quick").style.backgroundColor =  'transparent';
       }
       function quick_called(){
           sort_type = "Quick";
           information = '<div class="inner-info" style="display: flex;"><div><br><hr style="width:80%;"><h2 style="margin-left:15%;font-size:180%; ">Quick Sort</h2><p>Quick Sort is an efficient, in-place sorting algorith that in practice is faster than MergeSort and HeapSort. However, it is not a stable sorting algorithm, meaning that the relative positioning of equal sort items is not preserved.Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. The steps are:<br>1.Pick an element, called a pivot, from the array. This is usually done at random.<br>2.Move pivot element to the start of the array.<br>3.Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.<br><br>Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.<br>The base case of the recursion is an array of size zero or one, which are sorted by definition.</p><h3 style="margin-left:15%; font-size:160%;">Performance</h3><table style="margin-left:15%; font-size:120%;"><tbody><tr><td>Worst-case time complexity</td><td>O(N*N)</td></tr><tr><td>Average-case time complexity</td><td>O(NlogN)</td></tr><tr><td>Best-case time complexity</td><td>O(NlogN)</td></tr><tr><td>Worst-case-space time complexity</td><td>O(logN)</td></tr></tbody></table><br>  <br><hr style="width:70%;"><br></div><div style="margin-top: 100px;"><img src="logo.png" class="img1" style="width: 361px;margin-right: 38px;"></div>  </div>';
           info = document.getElementsByClassName("information");
           info[0].innerHTML = information;
           document.getElementById("bubble").style.backgroundColor =  'transparent';
           document.getElementById("selection").style.backgroundColor =  'transparent';
           document.getElementById("insertion").style.backgroundColor =  'transparent';
         //  document.getElementById("merge").style.backgroundColor =  'transparent';
           document.getElementById("heap").style.backgroundColor =  'transparent';
           document.getElementById("quick").style.backgroundColor = "blueviolet";
       }
   /*    function merge_called(){
           sort_type = "Merge";
           document.getElementById("bubble").style.backgroundColor =  'transparent';
           document.getElementById("selection").style.backgroundColor =  'transparent';
           document.getElementById("insertion").style.backgroundColor =  'transparent';
           document.getElementById("merge").style.backgroundColor = "blueviolet";
           document.getElementById("heap").style.backgroundColor =  'transparent';
           document.getElementById("quick").style.backgroundColor =  'transparent';
       }
	   
	   */



        function elm_array(){
            let values_string = document.getElementById('array_element').value
            array.splice(0, array.length)
            array_copy.splice(0, array_copy.length)
            values_string += ",";
            let j = 0 ;
            num = "";
            let tota_number = 0
            array = []
            while (j < values_string.length)
            {  if(values_string[j] == ",")
                {    array.push(parseInt(num));
                     array_copy.push(parseInt(num));  
                     tota_number = tota_number + 1;
                     num = ""; 
                }
                else
                  num += values_string[j];
 
                j += 1 
            }

           size = tota_number;
           
           


          

        }


    async function start_array()
      {  
          box = '<show style="display: flex;" class="show_num">'
            for(let z = 0 ;z < size;z++){
                box += '<div class="number1">1</div>'}
            
         box += '</show>';

        box += '<show style="display: flex;" class="show_num">'
            for(let z = 0 ;z < size;z++){
                box += '<div class="number">'+ array_copy[z].toString() +'</div>'}
         box += '</show>';

         box += '<show style="display: flex;" class="show_num">'
         for(let z = 0 ;z < size;z++){
             box += '<div class="number1">1</div>'}
         box += '</show>'  
         k1 = document.getElementsByClassName('showing')
         k1[0].innerHTML = box;  
         k2 = document.getElementsByClassName('totalswaps')
         k2[0].innerHTML = '<h2>Total swaps = ' + (0).toString() + '</h2>'

          
          await sleep(speed);
          for(let i = 0 ;i < swaps.length;i++)
         {    box = '<show style="display: flex;" class="show_num">'
              for(let z = 0 ;z < size;z++){
                  box += '<div class="number1">1</div>'}
                  box += '</show>'
              box += '<show style="display: flex;" class="show_num">'
                        for(let z = 0 ;z < size;z++){
                            if(z == swaps[i][0])
                            { box += '<div class="number" style=" background-color:green">'+array_copy[z].toString()+'</div>'}
                
                            else if(z == swaps[i][1])
                            { box += '<div class="number" style="background-color:green">'+array_copy[z].toString()+'</div>'}
                            else{
                            box += '<div class="number">'+ array_copy[z].toString() +'</div>'}
                    }
                box += '</show>';
                box += '<show style="display: flex;" class="show_num">'
                for(let z = 0 ;z < size;z++){
                    box += '<div class="number1">1</div>'}  
                box += '</show>'    
                k1 = document.getElementsByClassName('showing');
                k1[0].innerHTML = box;
                await sleep(speed)
             for(let j = swaps[i][0] ; j <= swaps[i][1] ;j++)
             {  
                // top  
                box = '<show style="display: flex;" class="show_num">';
                       for(let z = 0 ;z < size;z++)
                       {
                         if(z == j)
                         { box += '<div class="number" style="background-color:green">'+ array_copy[swaps[i][0]].toString() +'</div>'}
        
                         else{
                         box += '<div class="number1" >1</div>'}
              
                      }
                      box += '</show>';

        //    middle 
                box += '<show style="display: flex;" class="show_num">'
                    for(let z = 0 ;z < size;z++){
                        if(z == swaps[i][0])
                        { box += '<div class="number1" >1</div>'}
            
                        else if(z == swaps[i][1])
                        { box += '<div class="number1">1</div>'}
                        else{
                        box += '<div class="number">'+ array_copy[z].toString() +'</div>'}
                }
                box += '</show>';
    //    bottom
                      
                box += '<show style="display: flex;" class="show_num">';
                for(let z = 0 ;z < size;z++)
                {
                if(z == swaps[i][1] + swaps[i][0] - j)
                { box += '<div class="number" style="background-color:green">'+ array_copy[swaps[i][1]].toString() +'</div>'}

                else{
                box += '<div class="number1">1</div>'}

            }
            box += '</show>';
            k1 = document.getElementsByClassName('showing');
            k1[0].innerHTML = box;
            await sleep(speed);
        }


            let c = array_copy[swaps[i][0]]
            array_copy[swaps[i][0]] = array_copy[swaps[i][1]]
            array_copy[swaps[i][1]] = c
            box = '<show style="display: flex;" class="show_num">'
            for(let z = 0 ;z < size;z++){
                box += '<div class="number1">1</div>'}
            
            box += '</show>';  
            box += '<show style="display: flex;" class="show_num">'
                        for(let z = 0 ;z < size;z++){
                            if(z == swaps[i][0])
                            { box += '<div class="number" style=" background-color:orange">'+array_copy[z].toString()+'</div>'}
                
                            else if(z == swaps[i][1])
                            { box += '<div class="number" style=" background-color:orange">'+array_copy[z].toString()+'</div>'}
                            else{
                            box += '<div class="number">'+ array_copy[z].toString() +'</div>'}
                    }
                box += '</show>';
                box += '<show style="display: flex;" class="show_num">'
                for(let z = 0 ;z < size;z++){
                    box += '<div class="number1">1</div>'}  
                box += '</show>' 
                k1 = document.getElementsByClassName('showing');
                k1[0].innerHTML = box;
                await sleep(speed)
                k2 = document.getElementsByClassName('totalswaps')
                k2[0].innerHTML = '<h2>Total swaps = ' + (i+1).toString() + '</h2>'


         }
         box = '<show style="display: flex;" class="show_num">'
         for(let z = 0 ;z < size;z++){
             box += '<div class="number1">1</div>'}
         
        box += '</show>';
        box += '<show style="display: flex;" class="show_num">'
            for(let z = 0 ;z < size;z++){
                box += '<div class="number" style="background-color:green">'+ array_copy[z].toString() +'</div>'}
            
        box += '</show>';
        box += '<show style="display: flex;" class="show_num">'
                for(let z = 0 ;z < size;z++){
                    box += '<div class="number1">1</div>'}  
                box += '</show>' 
        k1 = document.getElementsByClassName('showing');
        k1[0].innerHTML = box;
        k2 = document.getElementsByClassName('totalswaps')
        k2[0].innerHTML = '<h2>Total swaps = ' + (swaps.length).toString() + '</h2>'
         
          
      }



       function do_sort(){
           elm_array();
           swaps = [];
           if(sort_type == "Bubble")
           {bubble_sort();}
           else if (sort_type == "Selection")
           {selection_sort()}
           else if (sort_type == "Insertion")
           {insertion_sort()}
           else if (sort_type == "Merge")
           {merge_sort()}
           else if (sort_type == "Heap")
           {heap_sort()}
           else if (sort_type == "Quick")
           {quick_sort()}
           else{
            k1 = document.getElementsByClassName('showing')
           k1[0].innerHTML = "<h1>Select Sorting Type</h1>"

           }
       }

        function bubble_sort(){
            
          for(let i = 0;i<size;i++)
           {
               for(let j = 0;j<size-1;j++)
               {    if(array[j] > array[j+1])
                   {   
                       swaps.push([j,j+1])
                       let c = array[j+1]
                       array[j+1] = array[j]
                       array[j] = c;
                   }
               }
           }
           start_array();
          
       }

       function selection_sort()
       {
            for(let i = 0;i < size-1;i++)
            {   let min_index = i;
                for(let j = i+1;j < size;j++)
                {
                    if( array[j] < array[min_index])
                    {  min_index = j;
                    }
                    
                }
                if(min_index != i)
                {      
                        swaps.push([i,min_index]);
                        let c = array[min_index]
                        array[min_index] = array[i]
                        array[i] = c;
                        
                }
            }
         
            start_array();
       }
       function insertion_sort()
       {     let i,  j; 
            
            for (i = 1; i < size; i++)
            { 
                
                j = i - 1; 
                while (j >= 0 && array[j] > array[j+1])
                {   
                    swaps.push([j,j+1]);
                    let c = array[j];
                    array[j] = array[j+1]
                    array[j+1] = c;
                    j = j - 1; 
                    
                } 
            } 
            
            start_array();
        
       }

   

    var array_length;
 
    function heap_root(input, i) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var max = i;
    
        if (left < array_length && input[left] > input[max]) {
            max = left;
        }
    
        if (right < array_length && input[right] > input[max])     {
            max = right;
        }
    
        if (max != i) {
            swap(input, i, max);
            heap_root(input, max);
        }
    }
    
    function swap(input, index_A, index_B) {
        swaps.push([index_A,index_B]);
        var temp = input[index_A];
        input[index_A] = input[index_B];
        input[index_B] = temp;
    }
    
    function heapSort(input) {
        
        array_length = input.length;
    
        for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
            heap_root(input, i);
          }
    
        for (i = input.length - 1; i > 0; i--) {
            swap(input, 0, i);
            array_length--;
          
          
            heap_root(input, 0);
        }
    }
    
    function heap_sort(){
    heapSort(array);
    start_array();
    }
    
    









    // for quick sort
    
   function quick_sort()
   {   
       quick_sorting(array,0,size-1);
       start_array();
   }    


    function swap_quick(array, leftIndex, rightIndex){
     if(leftIndex != rightIndex){     
    swaps.push([leftIndex,rightIndex])  
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
    }
}
function partition(array, left, right) {
    var pivot   = array[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap_quick(array, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quick_sorting(array, left, right) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right); 
        if (left < index - 1) { 
            quick_sorting(array, left, index - 1);
        }
        if (index < right) { 
            quick_sorting(array, index, right);
        }
    }
    return array;
}



// for merge sort 

function merge(array, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);
    var L_swap_index = new Array(n1);
    var R_swap_index = new Array(n2);
    for (var i = 0; i < n1; i++)
        L[i] = array[l + i];
        L_swap_index[i] = l+i
    for (var j = 0; j < n2; j++)
        R[j] = array[m + 1 + j];
        R_swap_index[j] = m + 1 + j;
 
    var i = 0;
    var j = 0;
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            array[k] = L[i];
            i++;
        }
        else {
            array[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        array[k] = L[i];
        i++;
        k++;
    }
 
    while (j < n2) {
        array[k] = R[j];
        j++;
        k++;
    }
}


function merge_sort()
{   show_array(-1,-1)
    mergeSort(Array,0,size-1)
    show_array(-1,-1)

}
function mergeSort(array,l, r){
    if(l>=r){
        return;
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(array,l,m);
    mergeSort(array,m+1,r);
    merge(array,l,m,r);
}
function reset(){
    array.splice(0, array.length)
    array_copy.splice(0, array_copy.length)
    size = array.length;
    sort_type = "";
           document.getElementById("bubble").style.backgroundColor =  'transparent';
           document.getElementById("selection").style.backgroundColor =  'transparent';
           document.getElementById("insertion").style.backgroundColor =  'transparent';
           document.getElementById("heap").style.backgroundColor = "transparent";
           document.getElementById("quick").style.backgroundColor =  'transparent';
           k1 = document.getElementsByClassName('showing');
           k1[0].innerHTML = ""; 
           k2 = document.getElementsByClassName("totalswaps")  
           k2[0].innerHTML = '<h2>Total swaps = ' + (0).toString() + '</h2>'
           info = document.getElementsByClassName("information");
           info[0].innerHTML = "";

           
}


// for slider 
const sliderValue = document.querySelector("span");
    const inputSlider = document.querySelector("input");
    inputSlider.oninput = (() =>{
   let value = inputSlider.value;
   speed = (500*(10.2) - 500*value)
   sliderValue.textContent = value;
   sliderValue.style.left = (value*10) + "%";
   sliderValue.classList.add("show");
 })
   inputSlider.onblur = (()=>{
   sliderValue.classList.remove("show");
 });