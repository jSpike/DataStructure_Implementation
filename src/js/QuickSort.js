/**
*	Quick sort is a sorting technic uses devide and conquer method
*	Here we are trying to implement the logical implementation in javascript
*	@method QuickSort
*	@param {Number} low
*	@param {Number} high
*/
let QuickSort = function(low, high) {
	if(low<high) {
		let sortedPos = Partition(low, high);
		low < sortedPos -1 ? QuickSort(low , sortedPos) : '';
		high > sortedPos ? QuickSort(sortedPos + 1, high) : '';
	} else {
		console.log(arrData);
	}
} 

// Test array  
let arrData = [10, 5 , 50, 80, 30, 70, 20],
	low = 0,
	high = arrData.length;  
	
QuickSort(low, high); 

/**
*	Partition logic work in following way. It takes low and high value from array
*	Then take first element as the pivoted element. Then iterating through
*	the array to check i-th value is greater than pivot then it get stopped.
*	The same way decrement j from the right side to check any values less than 
*	pivot value. If this two get stoped then interchanged the elements(i-th and j-th), Untill j value
*	crosses i value. Once this happen j-th position replaced with pivot value and jth
* 	value move to pivot indexs. Now the pivot value in sorted position. All from left
*	is less than pivot value and all element from right are greater than pivot but not
*	guarentee than its sorted. The some process get repeated recursevely to sort the array
*	@method Partition
*	@param {Number} low
*	@param {Number} high
*	@return {Number} j
*/
let Partition = function(low, high) {
	let pivotVal = arrData[low],
		i = low, 
		j = high,
		pivotPos = low;
		
	while( i<j ) {
		// i loop stops when an element less than pivot value
		do {
			i++;
		} while(arrData[i] < pivotVal)
		
		// j loop stops when an element greater than pivot value
		do {
			j--;
		} while(arrData[j] > pivotVal)
		
		if(i < j) {
			let temp = arrData[j];
			arrData[j] = arrData[i];
			arrData[i] = temp;
		}
		
	}
	let temp = arrData[j];
	arrData[j] = pivotVal;
	arrData[pivotPos] = temp;
	
	return j;
}

