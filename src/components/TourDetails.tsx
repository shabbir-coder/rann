interface Tour {
    id: string;
    name: string;
    description: string;
  }
  
  export default function TourDetails({ tour }: { tour: Tour }) {
    return (
      <div>
        <h2>{tour.name}</h2>
        <p>{tour.description}</p>
      </div>
    );
  }