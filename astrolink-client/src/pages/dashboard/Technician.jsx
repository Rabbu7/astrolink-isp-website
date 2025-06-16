import DashboardLayout from "../../components/DashboardLayout";

const Technician = () => {
  return (
    <DashboardLayout role="technician">
      <div className="stats bg-[#00000053] border-base-300 border flex justify-center">
        <div className="stat">
          <div className="stat-title">Total Assignments</div>
          <div className="stat-value">126</div>
          
        </div>

        <div className="stat">
          <div className="stat-title">Average Rating</div>
          <div className="stat-value">4.75</div>
          <div className="stat-actions">
            <button className="btn btn-xs">Excellent</button>
            
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Technician;
