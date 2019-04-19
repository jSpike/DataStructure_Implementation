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
*/
class QuickSort {
	constructor(dataArr) {
		this.arrData = dataArr;
		this.low = 0;
		this.high = dataArr.length;
		this.doSort(this.low, this.high);
	}
	
	// To perform sorting based on divide and conquer approch
	doSort(low, high) {
		if(low < high) {
			let sortedPos = this.partition(low, high);
			low < sortedPos -1 ? this.doSort(low , sortedPos) : '';
			high > sortedPos ? this.doSort(sortedPos + 1, high) : '';
		} else {
			//console.log(this.arrData);
		}
	}
	
	// To perform recursive partition
	partition(low, high) {
		let arrData = this.arrData,
			pivotVal = arrData[low],
			i = low, 
			j = high,
			pivotPos = low;
		//console.log('pivot value::'+ pivotVal);
		
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
				//console.log('Value interchanged::i val '+ arrData[i] + ' j val '+arrData[j]);
				let temp = arrData[j];
				arrData[j] = arrData[i];
				arrData[i] = temp;
			}
			
		}
		let temp = arrData[j];
		arrData[j] = pivotVal;
		arrData[pivotPos] = temp;
		//console.log('After change::'+ arrData)
		return j;
	}
	
}