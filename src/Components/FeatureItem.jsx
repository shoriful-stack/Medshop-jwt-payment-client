const FeatureItem = ({ icon, title, description, iconClass }) => {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-1 ${iconClass}`}>{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
