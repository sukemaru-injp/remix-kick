import { err } from 'neverthrow';
// import { useAppContext } from '~/provider/AppContext';
import { RepositoryResult } from '~/utils/types';

type DeleteResidentRepository = {
  deleteResident: (v: DeleteResidentParams) => RepositoryResult<null, unknown>;
};

export type DeleteResidentParams = {
  id: string;
};
export const useDeleteResidentRepository = (): DeleteResidentRepository => {
  // const { supabaseClient } = useAppContext();

  async function deleteResident({ id }: DeleteResidentParams): RepositoryResult<null, unknown> {
    return err(`not impl ${id}`);
  }

  return { deleteResident };
};
