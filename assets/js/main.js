const data = {
    labels: [
      'Branding and Marketing',
      'Bounty & Overhead',
      'Gift Code Inventory',
      'It Infrastucture',
      'Legal & Financial Overhead'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [52, 3, 26, 14, 5],
      backgroundColor: [
        'rgb(0, 249, 167)',
        'rgb(134, 91, 243)',
        'rgb(15, 165, 253)',
        'rgb(230, 83, 86)',
        'rgb(230, 194, 83)'
        
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
 