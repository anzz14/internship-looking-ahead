import PricingTierCard from './PricingTierCard';

export default function PricingTiersList({ tiers, onEdit, onDelete, deletingId }) {
  if (!tiers || tiers.length === 0) {
    return (
      <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="text-gray-500 dark:text-gray-400">
          <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <p className="text-lg font-medium mb-2">No pricing tiers found</p>
          <p className="text-sm">Add your first pricing tier to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tiers.map((tier) => (
        <PricingTierCard
          key={tier._id}
          tier={tier}
          onEdit={onEdit}
          onDelete={onDelete}
          isDeleting={deletingId === tier._id}
        />
      ))}
    </div>
  );
}
