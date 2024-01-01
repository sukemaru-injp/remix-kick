import { ok, err } from 'neverthrow';
import { useAppContext } from '~/provider/AppContext';
import { RepositoryResult } from '~/utils/types';
import { v4 as uuidv4 } from 'uuid';

type CreateResidentRepository = {
  createResident: (v: CreateResidentParams) => RepositoryResult<null, unknown>;
};

export type CreateResidentParams = {
  name: string;
};
export const useCreateResidentRepository = (uid: string): CreateResidentRepository => {
  const { supabaseClient } = useAppContext();

  async function createResident(params: CreateResidentParams): RepositoryResult<null> {
    const id = uuidv4();
    try {
      const { error } = await supabaseClient.from('residents').insert({
        id,
        uid,
        name: params.name,
      });

      if (error !== null) {
        return err({});
      }
      return ok(null);
    } catch (e) {
      return err({ kind: 'unknownError', error: e });
    }
  }

  return { createResident };
};
