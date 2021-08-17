import EditProductForm from 'components/EditProductForm/EditProductForm';
import WithAuth from 'components/WithAuth/WithAuth';

export default function EditProductPage() {
  return (
    <WithAuth>
      <EditProductForm />
    </WithAuth>
  );
}
