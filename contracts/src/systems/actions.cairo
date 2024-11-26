// define the interface
#[starknet::interface]
trait IActions<T> {
    fn spawn(ref self: T);
}

// dojo decorator
#[dojo::contract]
pub mod actions {
    use super::{IActions};
    use starknet::{ContractAddress, get_caller_address};
    use hungermemes::models::index::{Player};

    use dojo::model::{ModelStorage, ModelValueStorage};
    use dojo::event::EventStorage;

    //#[derive(Copy, Drop, Serde)]
    //#[dojo::event]
    //pub struct Attacked {}

    #[abi(embed_v0)]
    impl ActionsImpl of IActions<ContractState> {
        fn spawn(ref self: ContractState) {}
    }

    #[generate_trait]
    impl InternalImpl of InternalTrait {
        /// Use the default namespace "hungermemes". This function is handy since the ByteArray
        /// can't be const.
        fn world_default(self: @ContractState) -> dojo::world::WorldStorage {
            self.world(@"hungermemes")
        }
    }
}
