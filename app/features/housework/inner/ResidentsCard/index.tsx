import React, { useCallback, useState } from 'react';
import * as styles from './style.css';
import {
  Card,
  LinkStyledButton,
  AddIcon,
  Button,
  Text,
  DeleteIcon,
  IconWrapper,
} from '~/components/Elements';
import { Input } from '~/components/Form';
import { Resident } from '../../model/Resident';
import { CachedResource } from '~/utils/suspense';
import { useCreateResidentRepository } from '../../repository/createResidentRepository';
import { useToast } from '~/utils/toast';

type Props = {
  uid: string;
  residentsResource: CachedResource<readonly Resident[]>;
  forceUpdate: () => void;
};
export const ResidentsCard: React.FC<Props> = ({ uid, residentsResource, forceUpdate }) => {
  const residents = residentsResource.read();

  return (
    <Card title='住人' footer={<Footer uid={uid} forceUpdate={forceUpdate} />}>
      <div className={styles.innerWrapper}>
        <MainSection residents={residents} />
      </div>
    </Card>
  );
};

type MainSectionProps = {
  residents: readonly Resident[];
};
const MainSection: React.FC<MainSectionProps> = ({ residents }) => {
  return (
    <div className={styles.mainSection}>
      {residents.length === 0 ? (
        <Text>住人は登録されていません</Text>
      ) : (
        <>
          {residents.map((r) => {
            return <Row key={r.id} resident={r} />;
          })}
        </>
      )}
    </div>
  );
};

function Row({ resident }: { resident: Resident }): JSX.Element {
  return (
    <div className={styles.row}>
      <Text>{resident.name}</Text>
      <div className={styles.icons}>
        <IconWrapper icon={DeleteIcon} color='red' />
      </div>
    </div>
  );
}

type FooterProps = {
  uid: string;
  forceUpdate: () => void;
};
const Footer: React.FC<FooterProps> = ({ uid, forceUpdate }) => {
  const { createResident } = useCreateResidentRepository(uid);
  const toast = useToast();
  const [val, updateVal] = useState<string>('');

  const changeName = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    const name = e.target.value;
    updateVal(name);
  }, []);

  const [addMode, setAddMode] = useState(false);

  const add = useCallback(() => {
    setAddMode(true);
  }, []);

  const cancel = useCallback(() => {
    setAddMode(false);
    updateVal('');
  }, []);

  const [error, setError] = useState<string | null>(null);

  const validate = useCallback((): { ok: boolean } => {
    if (val.length > 50) {
      setError('50文字以下にしてください');
      return { ok: false };
    }
    if (val === '') {
      setError('必須項目です');
      return { ok: false };
    }
    setError(null);
    return { ok: true };
  }, [val]);

  const [loading, setLoading] = useState(false);
  const submit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    async (e) => {
      e.preventDefault();

      const { ok } = validate();
      if (!ok) {
        return;
      }
      setLoading(true);

      const res = await createResident({ name: val });

      res.match(
        () => {
          toast.success('住人が増えました');
          cancel();
          forceUpdate();
        },
        (e) => {
          console.error('create:error', e);
          toast.error('追加に失敗しました');
        },
      );
      setLoading(false);
    },
    [createResident, val, validate, toast, cancel, forceUpdate],
  );

  return (
    <div className={styles.footer}>
      {addMode ? (
        <form className={styles.formSection} onSubmit={submit}>
          <div className={styles.inputSection}>
            <span>名前</span>
            <Input value={val} onChange={changeName} />
            {error && <span className={styles.errorLabel}>{error}</span>}
          </div>
          <div className={styles.buttonSection}>
            <Button color='secondary' onClick={cancel} disabled={loading} type='button'>
              キャンセル
            </Button>
            <Button color='primary' type='submit' disabled={loading}>
              保存
            </Button>
          </div>
        </form>
      ) : (
        <LinkStyledButton icon={AddIcon} onClick={add}>
          住人を追加
        </LinkStyledButton>
      )}
    </div>
  );
};
