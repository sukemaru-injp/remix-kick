import { ok, err } from 'neverthrow';
import { Resident } from '../model/Resident';
import { useAppContext } from '~/provider/AppContext';
import { RepositoryResult } from '~/utils/types';
import { isValid } from 'date-fns';

type GetResidentsRepository = {
  getResidents: () => RepositoryResult<readonly Resident[]>;
};

export const useGetResidentsRepository = (uid: string): GetResidentsRepository => {
  const { supabaseClient } = useAppContext();
  async function getResidents(): RepositoryResult<readonly Resident[]> {
    try {
      const { data, error } = await supabaseClient.from('residents').select().gte('uid', uid);
      if (error !== null) {
        return err({ kind: 'unknownError', error });
      }

      const res =
        data == null
          ? []
          : data.map(
              (r): Resident => ({
                id: r.id,
                name: r.name,
                createdAt: isValid(new Date(r.inserted_at)) ? new Date(r.inserted_at) : new Date(),
              }),
            );

      return ok(res);
    } catch (e) {
      return err({ kind: 'unknownError', error: e });
    }
  }

  return { getResidents };
};
