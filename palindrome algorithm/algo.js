
// ALGORITHM QUESTION

//Write a function that returns the Length of the longest palindromic subString from the string below
// “Kayaka is where madam goes to work at noon”

function longestPalSubstr(str)
{
	let n = str.length; // calculating size of string
	if (n < 2)
		return n; // if string is empty then size will be 0.

	let maxLength = 1,start=0;
	let low, high;
  // looping through the strings
  
	for (let i = 0; i < n; i++) {
		low = i - 1;
		high = i + 1;
		while ( high < n && str[high] == str[i]) //increment 'high'
			high++;

		while ( low >= 0 && str[low] == str[i]) // decrement 'low'
			low--;

		while (low >= 0 && high < n && str[low] == str[high]){
			low--;
			high++;
		}

		let length = high - low - 1;
		if (maxLength < length) {
			maxLength = length;
			start=low+1;
		}
	}

  //bring out the palindrome and the lenght

	document.write("Longest palindrome substring is: ");
	document.write(str.substring(start,maxLength+start));
	return maxLength;
}

let str = "“Kayaka is where madam goes to work at noon”";
document.write("</br>","Length is: " + longestPalSubstr(str),"</br>");
