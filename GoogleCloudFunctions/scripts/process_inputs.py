from templateframework.metadata import Metadata

def run(metadata: Metadata = None):
    print(metadata.inputs)
    print(metadata.global_inputs)
    print(metadata.computed_inputs)
    print(metadata.global_computed_inputs)
    return metadata