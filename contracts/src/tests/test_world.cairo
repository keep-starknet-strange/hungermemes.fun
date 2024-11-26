//#[cfg(test)]
//mod tests {
//    use dojo_cairo_test::WorldStorageTestTrait;
//    use dojo::model::{ModelStorage, ModelValueStorage, ModelStorageTest};
//    use dojo::world::WorldStorageTrait;
//    use dojo_cairo_test::{
//        spawn_test_world, NamespaceDef, TestResource, ContractDefTrait, ContractDef
//    };

//    use hungermemes::systems::actions::{actions, IActionsDispatcher, IActionsDispatcherTrait};
//    //use hungermemes::models::{Position, m_Position, Moves, m_Moves, Direction};

//    fn namespace_def() -> NamespaceDef {
//        let ndef = NamespaceDef { namespace: "hungermemes", resources:
//        [//TestResource::Model(m_Position::TEST_CLASS_HASH),
//        //TestResource::Model(m_Moves::TEST_CLASS_HASH),
//        //TestResource::Event(actions::e_Moved::TEST_CLASS_HASH),
//        //TestResource::Contract(actions::TEST_CLASS_HASH)
//        ].span() };

//        ndef
//    }

//    fn contract_defs() -> Span<ContractDef> {
//        [
//            ContractDefTrait::new(@"hungermemes", @"actions")
//                .with_writer_of([dojo::utils::bytearray_hash(@"hungermemes")].span())
//        ].span()
//    }

//    #[test]
//    //fn test_world_test_set() {
//    //    // Initialize test environment
//    //    let caller = starknet::contract_address_const::<0x0>();
//    //    let ndef = namespace_def();

//    //    // Register the resources.
//    //    let mut world = spawn_test_world([ndef].span());

//    //    // Ensures permissions and initializations are synced.
//    //    world.sync_perms_and_inits(contract_defs());

//    //    // Test initial position
//    //    let mut position: Position = world.read_model(caller);
//    //    assert(position.vec.x == 0 && position.vec.y == 0, 'initial position wrong');

//    //    // Test write_model_test
//    //    position.vec.x = 122;
//    //    position.vec.y = 88;

//    //    world.write_model_test(@position);

//    //    let mut position: Position = world.read_model(caller);
//    //    assert(position.vec.y == 88, 'write_value_from_id failed');

//    //    // Test model deletion
//    //    world.erase_model(@position);
//    //    let position: Position = world.read_model(caller);
//    //    assert(position.vec.x == 0 && position.vec.y == 0, 'erase_model failed');
//    //}
//}
