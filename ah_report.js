"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author: Todd Adcox Jr
    Date:   3-6-19  
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/

// 6. Create a variable named donationtotal in which you will calculate the total amount of the donations to Appalachian House. Set its initial value to 0.
var donationTotal = 0;

// 7. Apply the forEach() method to the donors array, using the callback function calcSum(). This statement will calculate the donation total.
donors.forEach(calcSum);

// 8. Create a variable named summarytable storing the text of the following HTML code
// <table> <tr><th>Donors</th><td> donors </td></tr> <tr><th>Total Donations</th><td>$total</td></tr></table>
// where donors is the length of the donors.array, and total is the value of the donationTotal variable, preceded by a $. Apply the toLocaleString() method to the donationTotal variable so that the total amount of donations is displayed with a thousands separator in the report.
var summaryTable = "<table> <tr><th>Donors</th<td>" + donors.array + "</td></tr> <tr><th> Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr></table>";

// 9. Set the innerHTML property of the div element with the ID donationSummary to the value of the summaryTable variable.










function calcSum(donorAmt) {
      donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
      return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
      return b[9] - a[9];
}

function writeDonorRow(value) {
      donorTable += "<tr>";
      donorTable += "<td>$" + value[9].toLocaleString() + "</td>";
      donorTable += "<td>" + value[0] + "</td>";
      donorTable += "<td>" + value[10] + "</td>";
      donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";
      donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6] + "</td>";
      donorTable += "<td>" + value[7] + "</td>";
      donorTable += "<td>" + value[8] + "</td>";
      donorTable += "</tr>";
}