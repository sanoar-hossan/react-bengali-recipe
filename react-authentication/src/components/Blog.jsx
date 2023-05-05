import React from 'react';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const Blog = () => {
  const downloadPdf = () => {
    const input = document.getElementById('blog-content');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('blog.pdf');
    });
  };
    return (
        <div id="blog-content" className="bg-white shadow-md rounded-lg overflow-hidden">
      
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Question</div>
        
        <h1 className='py-5 text-black'>1.Differences between uncontrolled and controlled components</h1>

<p>Uncontrolled components in React are those where the form data is handled by the DOM, and React does not control the form data. In contrast, controlled components are those where the form data is handled by React itself. Controlled components provide more control over the form data and allow for easier form validation and handling.</p>

<h1 className='py-5 text-black'>2.How to validate React props using PropTypes</h1>

<p>PropTypes is a package that allows you to specify the type of each prop that a component should receive. This package can be used to validate the props of a React component and make sure that they are of the expected type. To use PropTypes, you need to import it and then define the propTypes object inside your component. This object should contain a property for each prop that specifies the expected type of the prop.</p>

<h1 className='py-5'>3.Difference between Node.js and Express.js:</h1>

<p>Node.js is a runtime environment for JavaScript that allows you to run JavaScript code outside of a web browser. Express.js, on the other hand, is a web application framework for Node.js. Express.js provides a set of features that makes it easier to create web applications using Node.js. Some of these features include routing, middleware support, and template engine integration.</p>

<h1 className='py-5'>4.What is a custom hook, and why will you create a custom hook?</h1>

<p>A custom hook is a function in React that allows you to reuse logic across multiple components. Custom hooks are typically used when you have a piece of logic that is used in multiple components and you want to avoid duplicating the code. Custom hooks are defined using the use prefix and can be used like any other React hook.

Custom hooks can be used to abstract away complex logic, such as data fetching, state management, and event handling, and make it easier to reuse across multiple components. Additionally, custom hooks can make your code more modular and easier to test, as you can isolate the logic into a separate hook and test it independently from the component.</p>
<div className='py-8'><button className='text-center btn btn-warning p-5' onClick={downloadPdf}>Download Pdf</button></div>
       
      </div>
      
    </div>
    );
};

export default Blog;